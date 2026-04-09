import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', type: 'query' });
  const [status, setStatus] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', type: 'query' });
        setTimeout(() => {
          setStatus(null);
          onClose();
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="modal-title">CONTACT VAANI</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>I want to submit a</label>
            <select 
              className="form-input" 
              value={formData.type} 
              onChange={e => setFormData({...formData, type: e.target.value})}
            >
              <option value="query">Query / Question</option>
              <option value="feedback">Feedback</option>
              <option value="review">Review</option>
            </select>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              className="form-input" 
              required 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
              placeholder="Your name" 
            />
          </div>
          <div className="form-group">
            <label>Email (Optional)</label>
            <input 
              type="email" 
              className="form-input" 
              value={formData.email} 
              onChange={e => setFormData({...formData, email: e.target.value})} 
              placeholder="your@email.com" 
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              className="form-input" 
              required 
              value={formData.message} 
              onChange={e => setFormData({...formData, message: e.target.value})} 
              placeholder="Tell us what you think..." 
            ></textarea>
          </div>
          <div className="form-submit">
            <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting...' : 'Send Message'}
            </button>
            {status === 'success' && <p style={{color: 'var(--signal)', marginTop: '10px'}}>Sent successfully!</p>}
            {status === 'error' && <p style={{color: '#ff4444', marginTop: '10px'}}>Something went wrong. Please try again.</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
