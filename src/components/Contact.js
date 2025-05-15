// import myImage from "../images/myPhoto.jpg";

const Contact = () => {
  return (
    <div className="flex">
      <div className="contact border  px-10 py-10 self-center bg-gray-100 m-10 rounded-xl w-fit">
        <h1 className="font-bold">Contact Us to develop your application</h1>
        <p>
          For enquires, Please contact to Me, my self Madhu Janjirala, I might
          be busy but one day I wil definatly guide you for your queries
        </p>
        <ul>
          <li>Contact Number: 1234567890</li>
          <li>Email:LearnReact@madhu.com</li>
          <li>Address: Hyderabad, India</li>
          <li>LinkedIn: Madhu Janjirala</li>
          <li>GitHub: jmadhu109216</li>
          <li>Twitter: Madhu Janjirala</li>
          <li>Facebook: Madhu Janjirala</li>
          <li>Instagram: Narayana_Gari_Abbayi</li>
          <li>Snapchat: Complain_Boy_Madhu</li>
          <li>WhatsApp: Madhu Janjirala</li>
          <li>Telegram: Madhu Janjirala</li>
        </ul>
        <h3>Thanks for choosing our application, Happy learning</h3>
      </div>
      <div className="user-photo">
        <img
          className="my-10"
          src="https://media.licdn.com/dms/image/v2/C5603AQEv4v_pQtmsNg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1657075089328?e=2147483647&v=beta&t=TeAIuVHRTeKxARHo-2FZLOtu6uDNo_cQ7xI5ZgNM_Sw"
          alt="My Image"
        />
      </div>
    </div>
  );
};
export default Contact;
