import React from "react";
import profil from "./assets/Profil.jpg"
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#f9f6f2] font-sans p-8 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-[#7b5e57] tracking-wider">PORTOFOLIO</h1>
        <p className="text-[#caa89e] text-lg mt-2">DHIANE ISYA NAA'IMAH</p>
      </div>

      {/* Foto dan Intro */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Foto */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#d3b7a4] shadow-lg">
          <img
            src={profil}
            alt="Dhiane"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Hi, Saya <span className="text-[#b08b7a]">Dhiane</span></h2>
          <p className="text-gray-700">
            Saya mahasiswa Informatika semester 2, memiliki ketertarikan dalam pengembangan web dan desain UI/UX.
            Berpengalaman dalam membuat proyek berbasis HTML, CSS, dan JavaScript. Aktif dalam organisasi kampus dan senang bekerja dalam tim.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-10 text-left w-full max-w-md">
        <h3 className="text-xl font-semibold mb-2">Skill</h3>
        <ul className="bg-white rounded-lg shadow-md p-4 space-y-2">
          <li>• HTML</li>
          <li>• CSS</li>
          <li>• Fotografi</li>
        </ul>
      </div>

      {/* Kontak */}
      <div className="mt-10 text-sm text-gray-700 space-y-2 text-center md:text-left">
        <p>📞 +6285860911022</p>
        <p>📧 dhianeisyanaa'imah@gamil.com</p>
        <p>📍 Karangtalun, Cilacap Utara, Cilacap</p>
        <p> @dhianeisya_</p>
      </div>
    </div>
  );
};

export default Portfolio;
