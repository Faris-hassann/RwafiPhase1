import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Container,
    Button,
    CircularProgress,
    Alert,
    useTheme,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserFormById, approveUserForm } from '../../../Services/UserForms';
import { Row, Col } from 'react-bootstrap';

function ViewUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const theme = useTheme();

    const [form, setForm] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const userRole = localStorage.getItem('userRole')?.toLowerCase(); // 👈 get role from localStorage

    const fetchData = async () => {
        try {
            const result = await getUserFormById(id);
            setForm(result);
            setError(false);
        } catch (err) {
            console.error('Failed to fetch user form:', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getUserFormById(id);
                setForm(result);
                setError(false);
            } catch (err) {
                console.error('Failed to fetch user form:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleApproval = async (isApproved) => {
        try {
            setSubmitting(true);
            await approveUserForm(id, isApproved);
            await fetchData();
            navigate('/Users');
        } catch (err) {
            console.error('Failed to update form status:', err);
        } finally {
            setSubmitting(false);
        }
    };

    // 🔐 Logic to determine if approval buttons should be shown
    const canApprove = () => {
        if (!form || !form.Status || !userRole) return false;

        const status = form.Status.toLowerCase();

        switch (userRole) {
            case 'branchmanager':
                return status === 'new';
            case 'companymanager':
                return status === 'new' || status === 'approval1';
            case 'admin':
                return ['new', 'approval1', 'approval2'].includes(status);
            case 'superadmin':
                return ['new', 'approval1', 'approval2', 'approval3'].includes(status);
            default:
                return false;
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Card
                sx={{
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h5">View User Form</Typography>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => navigate(-1)}
                        >
                            Back
                        </Button>
                    </Box>

                    {loading ? (
                        <Box display="flex" justifyContent="center" py={4}>
                            <CircularProgress color="secondary" />
                        </Box>
                    ) : error ? (
                        <Alert severity="error">Failed to load form details.</Alert>
                    ) : (
                        <Box>
                            <Row>
                                {Object.entries(form).map(([key, value]) => {
                                    if (key === 'CreatedBy' || key === 'UpdatedBy') return null;

                                    const isEmailLink = key === 'CreatedByEmail' || key === 'UpdatedByEmail';
                                    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

                                    const userId =
                                        key === 'CreatedByEmail' ? form.CreatedByUserID :
                                            key === 'UpdatedByEmail' ? form.UpdatedByUserID :
                                                null;

                                    return (
                                        <Col md={6} key={key} className="mb-3">
                                            <Typography variant="subtitle2" color="text.secondary">
                                                {label}
                                            </Typography>
                                            <Typography variant="body1" fontWeight="bold">
                                                {isEmailLink && value && userId ? (
                                                    <Typography
                                                        component="span"
                                                        sx={{
                                                            color: '#1976d2',
                                                            textDecoration: 'underline',
                                                            fontWeight: 'bold',
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={() => navigate(`/Employees/View/${userId}`)}
                                                    >
                                                        {value}
                                                    </Typography>
                                                ) : (
                                                    value ?? 'N/A'
                                                )}
                                            </Typography>
                                        </Col>
                                    );
                                })}
                            </Row>

                            {/* ✅ Show Approve/Decline if allowed */}
                            {canApprove() && (
                                <Box display="flex" justifyContent="center" gap={2} mt={4}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        disabled={submitting}
                                        onClick={() => handleApproval(true)}
                                    >
                                        Approve
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        disabled={submitting}
                                        onClick={() => handleApproval(false)}
                                    >
                                        Decline
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Container>
    );
}

export default ViewUser;
