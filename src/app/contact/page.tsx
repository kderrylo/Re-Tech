"use client";

import { useState, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  deviceType: string;
  condition: string;
  action: string;
  message: string;
  additionalInfo: string;
  photos: File[];
}

export default function KontakPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    deviceType: "",
    condition: "",
    action: "",
    message: "",
    additionalInfo: "",
    photos: [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        photos: Array.from(e.target.files),
      });
    }
  };

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     await submitForm(formData);
  // };

  return (
    <div>
      <div className="w-full shadow-lg text-dark">
        <div className='w-full h-[50vh] bg-[url("/bg-contact.png")] bg-cover bg-center flex justify-center items-end shadow-lg'>
          <div className="w-3/4 max-w-[1024px] h-3/5 flex flex-col items-center gap-20 landscape:gap-0 landscape:justify-between">
            <div className="flex flex-col gap-4 pt-10">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-light text-center">
                  Contact <span className="text-accent">Us</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-neutral-gray-100 py-16">
          <div className="w-full max-w-[1024px] mx-auto px-4 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <form className="flex flex-col gap-6">
                {/* Nama Lengkap */}
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-lg text-dark font-semibold mb-2"
                  >
                    Nama Lengkap:
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Nama Lengkap"
                    className="p-3 border border-neutral-300 rounded-lg"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-lg text-dark font-semibold mb-2"
                  >
                    Email:
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="p-3 border border-neutral-300 rounded-lg"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Nomor Telepon */}
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-lg text-dark font-semibold mb-2"
                  >
                    Nomor Telepon (opsional):
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Nomor Telepon"
                    className="p-3 border border-neutral-300 rounded-lg"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Alamat */}
                <div className="flex flex-col">
                  <label
                    htmlFor="address"
                    className="text-lg text-dark font-semibold mb-2"
                  >
                    Alamat Penjemputan:
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Alamat Penjemputan"
                    className="p-3 border border-neutral-300 rounded-lg"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                {/* Jenis Barang Elektronik */}
                <div className="flex flex-col">
                  <label
                    htmlFor="deviceType"
                    className="text-lg text-dark  font-semibold mb-2"
                  >
                    Jenis Barang Elektronik:
                  </label>
                  <select
                    id="deviceType"
                    className="p-3 border border-neutral-300 rounded-lg"
                    required
                    value={formData.deviceType}
                    onChange={handleChange}
                  >
                    <option value="">Pilih Jenis Barang</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Monitor">Monitor</option>
                    <option value="Printer">Printer</option>
                    <option value="Other">Lainnya</option>
                  </select>
                </div>

                {/* Kondisi Barang */}
                <div className="flex flex-col">
                  <label
                    htmlFor="condition"
                    className="text-lg text-dark font-semibold mb-2"
                  >
                    Kondisi Barang:
                  </label>
                  <select
                    id="condition"
                    className="p-3 border border-neutral-300 rounded-lg"
                    required
                    value={formData.condition}
                    onChange={handleChange}
                  >
                    <option value="">Pilih Kondisi</option>
                    <option value="Fully Functional">Berfungsi Penuh</option>
                    <option value="Partially Functional">
                      Berfungsi Sebagian
                    </option>
                    <option value="Not Working">Tidak Berfungsi</option>
                    <option value="Unknown Condition">
                      Kondisi Tidak Diketahui
                    </option>
                  </select>
                </div>

                {/* Menjual atau Membuang */}
                <div className="flex flex-col">
                  <label
                    htmlFor="action"
                    className="text-lg text-dark font-semibold mb-2"
                  >
                    Apakah Anda Ingin Menjual atau Membuang Barang Ini?
                  </label>
                  <select
                    id="action"
                    className="p-3 border border-neutral-300 rounded-lg"
                    required
                    value={formData.action}
                    onChange={handleChange}
                  >
                    <option value="">Pilih Aksi</option>
                    <option value="Sell">Jual</option>
                    <option value="Dispose">Buang</option>
                  </select>
                </div>

                {/* Upload Foto */}
                <div className="flex flex-col">
                  <label
                    htmlFor="photo"
                    className="text-lg text-dark font-semibold mb-2"
                  >
                    Unggah Foto Barang Elektronik:
                  </label>
                  <input
                    id="photo"
                    type="file"
                    className="p-3 border border-neutral-300 rounded-lg"
                    onChange={handlePhotoUpload}
                    multiple
                  />
                </div>

                {/* Informasi Tambahan */}
                <div className="flex flex-col">
                  <label
                    htmlFor="additionalInfo"
                    className="text-lg text-dark font-semibold mb-2"
                  >
                    Informasi Tambahan:
                  </label>
                  <textarea
                    id="additionalInfo"
                    placeholder="Tambahkan detail tentang perangkat (tahun, model, masalah, dll)"
                    className="p-3 border border-neutral-300 rounded-lg"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="rounded w-full text-light bg-dark md:max-w-full py-2"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="flex-1">
              <div className="w-full h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63463.49603881283!2d106.71015692167968!3d-6.201758500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6dcc7d2c4ad%3A0x209cb1eef39be168!2sUniversitas%20Bina%20Nusantara%20Kampus%20Anggrek!5e0!3m2!1sid!2sid!4v1728532320243!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
