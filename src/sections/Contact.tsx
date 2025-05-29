import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const weekdays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const today = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const prevMonth = () => setDate(new Date(year, month - 1, 1));
  const nextMonth = () => setDate(new Date(year, month + 1, 1));

  const monthName = date.toLocaleString('default', { month: 'long' });

  const isToday = (day) => {
    return (
      today.getDate() === day &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  const generateDates = () => {
    const blankDays = Array.from({ length: firstDay }, () => null);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    return [...blankDays, ...daysArray];
  };

  const isWeekend = (index) => (index % 7 === 0);

  return (
    <div className="bg-gradient-to-br from-white to-light-gray rounded-2xl shadow-xl p-6 text-dark-gray">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="text-sm px-3 py-1 bg-secondary-color text-white rounded hover:opacity-80 shadow">
          &lt;
        </button>
        <h4 className="text-xl font-bold text-primary-color">
          {monthName} {year}
        </h4>
        <button onClick={nextMonth} className="text-sm px-3 py-1 bg-secondary-color text-white rounded hover:opacity-80 shadow">
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-3 text-center text-sm font-semibold">
        {weekdays.map((day, index) => (
          <div key={index} className="text-secondary-color uppercase tracking-wider">
            {day.substring(0, 3)}
          </div>
        ))}

        {generateDates().map((day, index) => (
          <div
            key={index}
            className={`p-3 h-12 flex items-center justify-center rounded-lg transition-colors duration-300 
              ${day ? 'bg-white shadow-sm hover:bg-secondary-color hover:text-white cursor-pointer' : ''} 
              ${isToday(day) ? 'bg-secondary-color text-white font-bold scale-105 shadow-lg' : ''} 
              ${isWeekend(index) && day ? 'text-red-500 font-semibold' : ''}`}
          >
            {day || ''}
          </div>
        ))}
      </div>

      <div className="mt-6 text-sm text-center text-dark-gray italic">
        Hari ini: <strong>{weekdays[today.getDay()]}</strong> - {today.toLocaleDateString('id-ID')}
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-light-gray">
      <div className="section-container">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Get in touch for collaborations, questions, or just to say hello" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Bagian Availability + Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="card bg-medium-gray"
          >
            <h3 className="text-2xl font-semibold text-text-color mb-6">Availability</h3>

            <div className="space-y-4 text-text-color mb-6">
              <div className="flex justify-between border-b border-dark-gray pb-2">
                <span className="font-medium">Senin</span>
                <span>08:50 - 17:00</span>
              </div>
              <div className="flex justify-between border-b border-dark-gray pb-2">
                <span className="font-medium">Selasa</span>
                <span>07:00 - 17:00</span>
              </div>
              <div className="flex justify-between border-b border-dark-gray pb-2">
                <span className="font-medium">Rabu</span>
                <span>07:00 - 17:00</span>
              </div>
              <div className="flex justify-between border-b border-dark-gray pb-2">
                <span className="font-medium">Kamis</span>
                <span>08:50 - 17:00</span>
              </div>
              <div className="flex justify-between border-b border-dark-gray pb-2">
                <span className="font-medium">Jumat</span>
                <span>15.30 - 17:00</span>
              </div>
              <div className="flex justify-between border-b border-dark-gray pb-2">
                <span className="font-medium">Sabtu</span>
                <span className="text-dark-gray">Libur</span>
              </div>
              <div className="flex justify-between border-b border-dark-gray pb-2">
                <span className="font-medium">Minggu</span>
                <span className="text-dark-gray">Libur</span>
              </div>
            </div>

            {/* Kalender */}
            <Calendar />
          </motion.div>

          {/* Info Kontak dan Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-8"
          >
            <div className="card bg-medium-gray">
              <h3 className="text-2xl font-semibold text-text-color mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-secondary-color mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-text-color">Location</h4>
                    <p className="text-dark-gray">Desa Binangun, Kecamatan Bantarsari, Kabupaten Cilacap</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-secondary-color mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium text-text-color">Phone</h4>
                    <p className="text-dark-gray">
                      <a href="tel:+6281220010205" className="hover:text-secondary-color transition-colors duration-300">
                        +62 812 2001 0205
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* QR WhatsApp */}
              <div className="mt-8">
                <h4 className="font-medium mb-3 text-text-color">WhatsApp Direct Chat</h4>
                <div className="bg-light-gray p-2 inline-block rounded-lg border border-dark-gray">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/6281220010205" 
                    alt="WhatsApp QR Code" 
                    className="w-32 h-32"
                  />
                </div>
                <p className="text-sm text-dark-gray mt-2">Scan to chat directly</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="card bg-medium-gray h-96 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=desa%20binangun%20kecamatan%20bantarsari%20kabupaten%20cilacap&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;