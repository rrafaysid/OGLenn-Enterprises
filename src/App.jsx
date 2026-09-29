import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const CoreCapabilities = lazy(() => import('./pages/CoreCapabilities'));
const GovernmentContracting = lazy(() => import('./pages/GovernmentContracting'));
const PastPerformance = lazy(() => import('./pages/PastPerformance'));
const CapabilityStatement = lazy(() => import('./pages/CapabilityStatement'));
const NaicsPscCodes = lazy(() => import('./pages/NaicsPscCodes'));
const Certifications = lazy(() => import('./pages/Certifications'));
const KeyPersonnel = lazy(() => import('./pages/KeyPersonnel'));
const QualityCompliance = lazy(() => import('./pages/QualityCompliance'));
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'));
const Contact = lazy(() => import('./pages/Contact'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="text-navy font-heading text-xl">Loading...</div>
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<LoadingFallback />}>
              <Home />
            </Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          } />
          <Route path="core-capabilities" element={
            <Suspense fallback={<LoadingFallback />}>
              <CoreCapabilities />
            </Suspense>
          } />
          <Route path="government-contracting" element={
            <Suspense fallback={<LoadingFallback />}>
              <GovernmentContracting />
            </Suspense>
          } />
          <Route path="past-performance" element={
            <Suspense fallback={<LoadingFallback />}>
              <PastPerformance />
            </Suspense>
          } />
          <Route path="capability-statement" element={
            <Suspense fallback={<LoadingFallback />}>
              <CapabilityStatement />
            </Suspense>
          } />
          <Route path="naics-psc-codes" element={
            <Suspense fallback={<LoadingFallback />}>
              <NaicsPscCodes />
            </Suspense>
          } />
          <Route path="certifications" element={
            <Suspense fallback={<LoadingFallback />}>
              <Certifications />
            </Suspense>
          } />
          <Route path="key-personnel" element={
            <Suspense fallback={<LoadingFallback />}>
              <KeyPersonnel />
            </Suspense>
          } />
          <Route path="quality-compliance" element={
            <Suspense fallback={<LoadingFallback />}>
              <QualityCompliance />
            </Suspense>
          } />
          <Route path="service-areas" element={
            <Suspense fallback={<LoadingFallback />}>
              <ServiceAreas />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
            </Suspense>
          } />
          <Route path="testimonials" element={
            <Suspense fallback={<LoadingFallback />}>
              <Testimonials />
            </Suspense>
          } />
          <Route path="privacy-policy" element={
            <Suspense fallback={<LoadingFallback />}>
              <PrivacyPolicy />
            </Suspense>
          } />
          <Route path="terms-of-use" element={
            <Suspense fallback={<LoadingFallback />}>
              <TermsOfUse />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<LoadingFallback />}>
              <NotFound />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
