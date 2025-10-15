// src/pages/AdmissionPage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Tabs, Tab } from 'react-bootstrap';
import { Check2Circle, CheckCircleFill } from 'react-bootstrap-icons';
import SectionHeader from '../components/SectionHeader';
import PNC1 from '../assets/pnc1.jpg';
// Import all necessary styles for this page and the form
import '../styles/AdmissionPage.css';
import '../styles/AdmissionForm.css';


// --- Hero Section Component ---
const AdmissionHero = () => (
  <div className="admission-hero-section"style={{ backgroundImage: `url(${PNC1})` }}>
    <div className="admission-hero-overlay"></div>
    <Container className="position-relative">
      <div className="admission-hero-content">
        <h1>Admission Center</h1>
      </div>
    </Container>
  </div>
);


// --- Online Form Step Components ---
const ProgressBar = ({ currentStep }) => {
  const steps = ['Personal', 'Academic', 'Review'];
  return (
    <div className="progress-bar-container">
      {steps.map((step, index) => (
        <div key={index} className={`progress-step ${index + 1 <= currentStep ? 'active' : ''}`}>
          <div className="step-circle">{index + 1}</div>
          <div className="step-label">{step}</div>
        </div>
      ))}
    </div>
  );
};

const Step1_Personal = ({ data, handleChange, errors }) => (
  <Row>
    <Col md={6}><Form.Group className="mb-3"><Form.Label>First Name</Form.Label><Form.Control type="text" name="firstName" value={data.firstName} onChange={handleChange} isInvalid={!!errors.firstName} required /><Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback></Form.Group></Col>
    <Col md={6}><Form.Group className="mb-3"><Form.Label>Last Name</Form.Label><Form.Control type="text" name="lastName" value={data.lastName} onChange={handleChange} isInvalid={!!errors.lastName} required /><Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback></Form.Group></Col>
    <Col md={6}><Form.Group className="mb-3"><Form.Label>Email</Form.Label><Form.Control type="email" name="email" value={data.email} onChange={handleChange} isInvalid={!!errors.email} required /><Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback></Form.Group></Col>
    <Col md={6}><Form.Group className="mb-3"><Form.Label>Phone Number</Form.Label><Form.Control type="tel" name="phone" value={data.phone} onChange={handleChange} isInvalid={!!errors.phone} required /><Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback></Form.Group></Col>
  </Row>
);

const Step2_Academic = ({ data, handleChange, errors }) => (
  <Row>
    <Col md={12}><Form.Group className="mb-3"><Form.Label>Previous School</Form.Label><Form.Control type="text" name="prevSchool" value={data.prevSchool} onChange={handleChange} isInvalid={!!errors.prevSchool} required /><Form.Control.Feedback type="invalid">{errors.prevSchool}</Form.Control.Feedback></Form.Group></Col>
    <Col md={6}><Form.Group className="mb-3"><Form.Label>Year Graduated</Form.Label><Form.Control type="number" name="yearGraduated" value={data.yearGraduated} onChange={handleChange} isInvalid={!!errors.yearGraduated} required /><Form.Control.Feedback type="invalid">{errors.yearGraduated}</Form.Control.Feedback></Form.Group></Col>
    <Col md={6}><Form.Group className="mb-3"><Form.Label>Desired Course</Form.Label><Form.Select name="course" value={data.course} onChange={handleChange} isInvalid={!!errors.course} required><option value="">Select a Course...</option><option value="BS in Computer Science">BS in Computer Science</option><option value="BS in Information Technology">BS in Information Technology</option><option value="BS in Nursing">BS in Nursing</option><option value="BS in Psychology">BS in Psychology</option></Form.Select><Form.Control.Feedback type="invalid">{errors.course}</Form.Control.Feedback></Form.Group></Col>
  </Row>
);

const Step3_Review = ({ data }) => (
  <div className="review-section">
    <h5>Personal Information</h5>
    <dl as={Row}><dt as={Col} sm={4}>Full Name</dt><dd as={Col} sm={8}>{data.personal.firstName} {data.personal.lastName}</dd><dt as={Col} sm={4}>Email</dt><dd as={Col} sm={8}>{data.personal.email}</dd><dt as={Col} sm={4}>Phone</dt><dd as={Col} sm={8}>{data.personal.phone}</dd></dl>
    <h5 className="mt-4">Academic Information</h5>
    <dl as={Row}><dt as={Col} sm={4}>Previous School</dt><dd as={Col} sm={8}>{data.academic.prevSchool}</dd><dt as={Col} sm={4}>Year Graduated</dt><dd as={Col} sm={8}>{data.academic.yearGraduated}</dd><dt as={Col} sm={4}>Desired Course</dt><dd as={Col} sm={8}>{data.academic.course}</dd></dl>
  </div>
);

const SuccessMessage = () => (
  <div className="success-message">
    <CheckCircleFill />
    <h2>Application Submitted!</h2>
    <p className="lead">Thank you for applying. We have received your information and will contact you shortly regarding the next steps.</p>
  </div>
);


// --- Manual Application Content Component ---
const ManualApplicationContent = () => {
  const steps = [
    { number: '1', title: 'Submit Requirements', description: 'Complete and submit all required documents to the registrar\'s office for initial evaluation.' },
    { number: '2', title: 'Take Entrance Exam', description: 'Schedule and successfully pass the university entrance examination to assess your readiness.' },
    { number: '3', title: 'Undergo Interview', description: 'Participate in an interview with the college dean or a faculty member to discuss your goals.' },
    { number: '4', title: 'Complete Enrollment', description: 'Once accepted, finalize your enrollment process by submitting final documents and paying fees.' },
  ];
  const freshmenReqs = [
    'Original and Photocopy of Form 138/Report Card', 'Certificate of Good Moral Character', 'PSA Authenticated Birth Certificate', '4 pcs. 2x2 ID Pictures (white background)',
  ];
  return (
    // This wrapper with padding is the fix for the overlap issue
    <div className="manual-application-wrapper">
      <SectionHeader title="Application Process" subtitle="Follow these four simple steps to become a part of the PNC community." align="center" />
      <Row className="g-4 justify-content-center mb-5">{steps.map(step => (<Col md={6} lg={3} key={step.number} className="d-flex align-items-stretch"><Card className="step-card shadow-sm w-100"><div className="step-number">{step.number}</div><Card.Body className="mt-4"><Card.Title>{step.title}</Card.Title><Card.Text>{step.description}</Card.Text></Card.Body></Card></Col>))}</Row>
      <SectionHeader title="Admission Requirements" align="center" />
      <Row className="justify-content-center g-4 mb-5"><Col md={8}><Card className="requirements-card shadow-sm"><Card.Header as="h5">For Freshmen</Card.Header><Card.Body><ul className="requirements-list">{freshmenReqs.map((req, index) => (<li key={index}><Check2Circle className="icon" /> {req}</li>))}</ul></Card.Body></Card></Col></Row>
      <SectionHeader title="Download Admission Form" align="center" />
      <div className="text-center"><p className="lead mb-4">Click the button below to get your copy of the official admission form.</p><Button href="/path/to/admission-form.pdf" target="_blank" size="lg" className="hero-button-primary">Download Form Now</Button></div>
    </div>
  );
};


// --- Main AdmissionPage Component ---
const AdmissionPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: { firstName: '', lastName: '', email: '', phone: '' },
    academic: { prevSchool: '', yearGraduated: '', course: '' },
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const section = currentStep === 1 ? 'personal' : 'academic';
    setFormData(prev => ({ ...prev, [section]: { ...prev[section], [name]: value } }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    const currentData = currentStep === 1 ? formData.personal : formData.academic;
    for (const key in currentData) {
      if (!currentData[key]) {
        const fieldName = key.replace(/([A-Z])/g, ' $1').toLowerCase();
        newErrors[key] = `The ${fieldName} field is required.`;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => { if (validateStep()) setCurrentStep(prev => prev + 1); };
  const prevStep = () => setCurrentStep(prev => prev - 1);
  const handleSubmit = () => {
    console.log('Final Application Data:', formData);
    setCurrentStep(4); // Move to success step
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1: return <Step1_Personal data={formData.personal} handleChange={handleChange} errors={errors} />;
      case 2: return <Step2_Academic data={formData.academic} handleChange={handleChange} errors={errors} />;
      case 3: return <Step3_Review data={formData} />;
      case 4: return <SuccessMessage />;
      default: return null;
    }
  };

  return (
    <>
      <AdmissionHero />
      <Container className="pb-5">
        <div className="admission-content-container">
          <Tabs defaultActiveKey="online" id="admission-tabs" className="admission-tabs" justify>
            <Tab eventKey="online" title="Online Application">
              <div className="p-4 p-md-5">
                {currentStep <= 3 && <ProgressBar currentStep={currentStep} />}
                <Form noValidate>
                  {renderFormStep()}
                  {currentStep <= 3 && (
                    <div className="form-navigation">
                      <Button variant="secondary" onClick={prevStep} disabled={currentStep === 1}>Previous</Button>
                      {currentStep < 3 && <Button variant="primary" onClick={nextStep}>Next</Button>}
                      {currentStep === 3 && <Button variant="success" onClick={handleSubmit}>Submit Application</Button>}
                    </div>
                  )}
                </Form>
              </div>
            </Tab>
            <Tab eventKey="manual" title="Manual Application Guide">
              <ManualApplicationContent />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
};

export default AdmissionPage;