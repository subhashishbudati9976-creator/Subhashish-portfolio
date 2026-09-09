import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Textarea } from '../components/Textarea';
import { useContactForm } from '../hooks/useContactForm';

export const ContactSection: React.FC = () => {
  const {
    data,
    errors,
    status,
    serverError,
    handleChange,
    handleSubmit,
    handleReset,
  } = useContactForm();

  return (
    <section
      id="contact"
      className="portfolio-section page-container"
      aria-labelledby="contact-heading"
    >
      <div className="contact-grid">
        <div className="motion-reveal" data-motion-reveal="fade-up">
          <div className="section-label">
            <span className="type-eyebrow">Let&apos;s Connect</span>
          </div>
          <h2 className="section-title" id="contact-heading">
            Start a Conversation
          </h2>
          <p className="type-body-lg" style={{ color: 'var(--color-text-muted)' }}>
            Have a project, question, or opportunity in mind? Send a message
            and I&apos;ll get back to you through the contact details below.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <span className="contact-info-label">Email</span>
              <a
                className="contact-info-value"
                href="mailto:subhashishbudati9976@gmail.com"
              >
                subhashishbudati9976@gmail.com
              </a>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-label">Based in</span>
              <span className="contact-info-value plain">Hyderabad, India</span>
            </div>
          </div>
        </div>

        <div className="contact-form-card motion-reveal motion-scale-fade" data-motion-reveal="scale-fade">
          {status === 'success' ? (
            <div className="contact-success" role="status" aria-live="polite">
              <div className="contact-success-icon" aria-hidden="true">✓</div>
              <h3 className="contact-success-title">Message received.</h3>
              <p className="contact-success-body">
                This Phase 2 form is running locally. Your message was accepted
                for this demo; email delivery will be connected in a later phase.
              </p>
              <Button type="button" variant="secondary" onClick={handleReset}>
                Send another message
              </Button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {serverError && (
                <div className="contact-error-banner" role="alert">
                  {serverError}
                </div>
              )}

              <div className="contact-form-row">
                <Input
                  id="contact-name"
                  name="name"
                  label="Name"
                  value={data.name}
                  onChange={handleChange}
                  error={errors.name}
                  autoComplete="name"
                  maxLength={80}
                  required
                />
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  label="Email"
                  value={data.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>

              <Input
                id="contact-subject"
                name="subject"
                label="Subject"
                value={data.subject}
                onChange={handleChange}
                error={errors.subject}
                maxLength={120}
                required
              />

              <Textarea
                id="contact-message"
                name="message"
                label="Message"
                value={data.message}
                onChange={handleChange}
                error={errors.message}
                maxLength={2000}
                rows={7}
                required
              />

              <div className="contact-form-actions">
                <Button type="submit" size="lg" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </Button>
                <span className="form-feedback helper">
                  Required fields are marked with *.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};