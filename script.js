const appointmentForm = document.getElementById('appointment-form');
const appointmentList = document.getElementById('appointment-list');
const bookingMessage = document.getElementById('booking-message');
const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

appointmentForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(appointmentForm);
  const patientName = formData.get('patientName')?.toString().trim() || 'Patient';
  const doctor = formData.get('doctor')?.toString() || 'Dr. Sara Khan';
  const date = formData.get('date')?.toString() || 'TBD';
  const time = formData.get('time')?.toString() || 'TBD';
  const reason = formData.get('reason')?.toString().trim() || 'General visit';

  const item = document.createElement('article');
  item.className = 'appointment-item';
  item.innerHTML = `
    <div>
      <h3>${reason}</h3>
      <p>${doctor} • ${date} • ${time}</p>
      <p>Booked for ${patientName}</p>
    </div>
    <span class="status-pill confirmed">Confirmed</span>
  `;

  appointmentList.prepend(item);
  bookingMessage.textContent = `Appointment booked successfully with ${doctor} on ${date} at ${time}.`;
  bookingMessage.style.display = 'block';
  appointmentForm.reset();
});

chatForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;

  const patientBubble = document.createElement('div');
  patientBubble.className = 'bubble patient';
  patientBubble.textContent = message;
  chatMessages.appendChild(patientBubble);
  chatInput.value = '';

  setTimeout(() => {
    const doctorBubble = document.createElement('div');
    doctorBubble.className = 'bubble doctor';
    doctorBubble.textContent = 'Thanks for sharing that. I will review this and follow up shortly.';
    chatMessages.appendChild(doctorBubble);
  }, 650);
});
