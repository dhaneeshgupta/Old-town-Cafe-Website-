/**
 * OLD TOWN CAFE - EMAIL SERVICE
 * 
 * This service handles sending form submissions to the cafe owner.
 * For now, the recipient email address is set to a placeholder (temp).
 * 
 * TO CHANGE OWNER EMAIL:
 * Update the OWNER_EMAIL constant below.
 * 
 * TO HOOK UP A REAL EMAIL API (e.g., Formspree, EmailJS):
 * Replace the sendContactEmail implementation with your service's endpoint or SDK.
 */

// 1. Owner's email configuration (Change this to your actual email)
export const OWNER_EMAIL = "[EMAIL_ADDRESS]";

// Helper to simulate a network delay 
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Sends contact form details to the owner.
 * 
 * @param {Object} formData - Object containing name, email, and message
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendContactEmail(formData) {
  console.log(`[EmailService] Attempting to send form data to owner email (${OWNER_EMAIL}):`, formData);

  // Validate form data
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error("Missing required form fields (name, email, or message)");
  }

  // Simulate network delay (1 second)
  await delay(1000);

  try {
    // ---- LOCAL STORAGE INTEGRATION ----
    // We save the submission in localStorage so it can be viewed in the Admin Panel.
    const existingMessages = JSON.parse(localStorage.getItem("otc_messages") || "[]");

    const newSubmission = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toISOString(),
      read: false
    };

    localStorage.setItem("otc_messages", JSON.stringify([newSubmission, ...existingMessages]));

    // ---- EMAIL SERVICE INTEGRATION OPTIONS ----
    // OPTION A: Formspree (Super simple client-side form submission)
    // To use Formspree, sign up at formspree.io, create a form, and uncomment the code below:
    /*
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        _to: OWNER_EMAIL
      })
    });
    if (!response.ok) throw new Error("Failed to send via Formspree");
    */

    // OPTION B: EmailJS
    // To use EmailJS, sign up at emailjs.com, and use their SDK:
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    //   from_name: formData.name,
    //   from_email: formData.email,
    //   message: formData.message,
    //   to_email: OWNER_EMAIL
    // }, 'YOUR_PUBLIC_KEY');

    return {
      success: true,
      message: "Message sent successfully!"
    };
  } catch (error) {
    console.error("[EmailService] Error occurred while sending message:", error);
    return {
      success: false,
      message: error.message || "Failed to send message. Please try again."
    };
  }
}
