import { useState } from 'react';
import '../styles/ScheduleVisit.css';

interface ScheduleVisitProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleVisit({ isOpen, onClose }: ScheduleVisitProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  
  if (!isOpen) return null;
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  const renderCalendar = () => {
    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Add weekday headers
    days.push(
      <div className="calendar-header" key="header">
        {weekdays.map(day => (
          <div className="weekday" key={day}>{day}</div>
        ))}
      </div>
    );
    
    // Add blank spaces for days before the first day of the month
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      blanks.push(<div className="calendar-day empty" key={`empty-${i}`}></div>);
    }
    
    // Add days of the month
    const monthDays = [];
    for (let d = 1; d <= daysInMonth; d++) {
      // Format date as YYYY-MM-DD
      const month = currentMonth + 1; // Convert to 1-indexed for display
      const paddedMonth = month < 10 ? `0${month}` : month;
      const paddedDay = d < 10 ? `0${d}` : d;
      const dateStr = `${currentYear}-${paddedMonth}-${paddedDay}`;
      
      monthDays.push(
        <div 
          className={`calendar-day ${selectedDate === dateStr ? 'selected' : ''}`}
          key={d}
          onClick={() => setSelectedDate(dateStr)}
        >
          {d}
        </div>
      );
    }
    
    const totalSlots = [...blanks, ...monthDays];
    let rows = [];
    let cells = [];
    
    totalSlots.forEach((day, i) => {
      if (i % 7 !== 0) {
        cells.push(day);
      } else {
        rows.push(<div className="calendar-row" key={i}>{cells}</div>);
        cells = [day];
      }
      if (i === totalSlots.length - 1) {
        rows.push(<div className="calendar-row" key={i}>{cells}</div>);
      }
    });
    
    return (
      <div className="calendar">
        <div className="calendar-nav">
          <button className="calendar-nav-btn" onClick={goToPreviousMonth}>&lt;</button>
          <div className="calendar-month">{months[currentMonth]} {currentYear}</div>
          <button className="calendar-nav-btn" onClick={goToNextMonth}>&gt;</button>
        </div>
        {days}
        {rows}
      </div>
    );
  };
  
  const timeSlots = [
    '9:00 AM', '11:00 AM', '1:00 PM',
    '3:00 PM', '5:00 PM', '6:00 PM'
  ];
  
  return (
    <div className="modal-overlay">
      <div className="schedule-visit-modal">
        <div className="schedule-visit-content">
          <h2>Schedule Site Visit</h2>
          
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input 
              type="text" 
              id="fullName" 
              placeholder="Enter your full name" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number *</label>
            <input 
              type="tel" 
              id="phoneNumber" 
              placeholder="+91 98765 43210" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="projectInterest">Project Interest *</label>
            <select id="projectInterest" required>
              <option value="">Select a project to visit</option>
              <option value="project1">Project 1</option>
              <option value="project2">Project 2</option>
              <option value="project3">Project 3</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Preferred Date</label>
            {renderCalendar()}
          </div>
          
          <div className="form-group">
            <label>Preferred Time</label>
            <div className="time-slots">
              {timeSlots.map(time => (
                <button 
                  key={time} 
                  className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="pickupLocation">Pickup Location (Optional)</label>
            <input 
              type="text" 
              id="pickupLocation" 
              placeholder="Enter pickup location in Nashik/Igatpuri" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="specialRequirements">Special Requirements</label>
            <textarea 
              id="specialRequirements" 
              placeholder="Any specific requirements or questions for the site visit..." 
              rows={4}
            ></textarea>
          </div>
          
          <button className="schedule-btn">Schedule Site Visit</button>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
      </div>
    </div>
  );
}