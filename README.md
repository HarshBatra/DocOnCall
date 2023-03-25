##Introduction:

DocOnCall is a telemedicine platform that provides patients with a convenient way to access healthcare services remotely. The platform is built using React.js, Tailwind CSS, Firebase for Authentication, and Google Cloud for hosting and managing the backend. This documentation provides an overview of the platform and describes the steps involved in setting up and using DocOnCall.

##Platform Overview:

DocOnCall can be accessed at https://doc-on-call.vercel.app/. DocOnCall provides patients with a range of features that allow them to access healthcare services remotely.

Virtual Consultations: Patients can schedule virtual consultations with healthcare providers and receive medical advice remotely. With DocOnCall, you can connect with certified healthcare professionals, including doctors, nurses, and specialists, from the comfort of your own home or wherever you are. Whether you have a minor health concern, need a prescription refill, or require ongoing treatment for a chronic condition, DocOnCall makes it easy for you to get the care you need without having to visit a physical clinic. Our user-friendly platform is designed to make healthcare accessible and affordable for everyone, with secure video consultations, real-time chat, and easy scheduling options. With DocOnCall, you can be confident that you're receiving high-quality medical care from the comfort of your own home.

#We’re also planning to add some amazing functionalities on DocOnCall such as:

Electronic Medical Records: Patients can securely store and access their medical records online using Blockchain technology.

AI Health ChatBot: Patients can directly access an AI chatbot that responds to their medical concerns using pre-programmed buttons for common symptoms, else it will recommend consulting a doctor.

Health Monitoring: Patients can monitor their health remotely and receive notifications and reminders for appointments and medication.
End to End Encryption using Blockchain, so that it also prioritizes your safety and security.

##Setting up DocOnCall:

To set up DocOnCall, follow these steps:

1. Install Node.js and React.js on your local machine.
2. Clone the DocOnCall repository from GitHub.
3. Install the required dependencies using the npm install command.
4. Configure Firebase Authentication by creating a new project on the Firebase Console and enabling email and password authentication.
5. Configure Google Cloud by creating a new project on the Google Cloud Console and enabling Cloud Firestore and Cloud Functions.
6. Set up the environment variables required for the Firebase and Google Cloud configurations.
7. Run the npm start command to start the web application.

##Using DocOnCall:

#To use DocOnCall as a user/patient, follow these steps:

1. Sign up for a new account by providing your email address and password.
2. Log in to your account using your email and password.
3. Schedule a virtual consultation by selecting a healthcare provider and booking an appointment.
4. Pay using the payment gateway provided using any preferred method.
5. A request to join the meeting has been sent to the doctor.
6. Once they accept the request, you will be able to attend the video consultation successfully.

#To use DocOnCall as a Doctor, follow these steps:

1. If you are new to DocOnCall, navigate to the footer of the web app and choose "DOCTOR Sign-Up". If you are already registered, select "DOCTOR Login" to access your existing profile.
2. Sign up for a new account by providing your email address and password.
3. Log in to your account using your email and password.
4. To indicate your availability for consultation, access your Doctor Profile and click on the "Not Available" button to switch it to "Available". This will allow users to see your name in the list of available doctors.
5. When a user selects your profile for consultation and completes the fee payment, you will receive a request to enter the video chat for the consultation.
6. Click on "Accept" to start the video meeting.
