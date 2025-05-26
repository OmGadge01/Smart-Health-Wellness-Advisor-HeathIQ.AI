import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const hasErrors = Object.values(errors).some(error => error !== '');
//   if (hasErrors) {
//     alert('Please fix the errors before submitting');
//     return;
//   }

//   try {
//     const response = await fetch("http://localhost:5000/api/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const result = await response.json();
//     alert(result.message);
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     alert("Error submitting form");
//   }
// };


const HealthForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    sleep: 7,
    exerciseFrequency: '',
    exerciseType: '',
    waterIntake: '',
    allergies: '',
    alcohol: '',
    smoking: false,
    stress: 5
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    sleep: '',
    exerciseFrequency: '',
    exerciseType: '',
    waterIntake: '',
    allergies: '',
    alcohol: '',
    smoking: '',
    stress: ''
  })

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value })
    validateField(field, value)
  }

  const validateField = (field, value) => {
    let error = ''
    if (field === 'name' || field === 'email') {
      if (value.trim() === '') {
        error = 'This field is required'
      }
    } else if (field === 'age' || field === 'height' || field === 'weight') {
      if (isNaN(value) || value < 0) {
        error = 'Please enter a valid number'
      }
    } else if (field === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address'
      }
    }
    setErrors({ ...errors, [field]: error })
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  const hasErrors = Object.values(errors).some((error) => error !== '');
  if (hasErrors) {
    alert('Please fix the errors before submitting');
  } else {
    try {
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      alert(result.message);

      // ✅ Reset form after successful submission
      setForm({
        name: '',
        email: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        sleep: 7,
        exerciseFrequency: '',
        exerciseType: '',
        waterIntake: '',
        allergies: '',
        alcohol: '',
        smoking: false,
        stress: 5,
      });

      // Optional: also clear any errors
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  }
};

  return (
    <div className='max-w-2xl mx-auto p-6 m-8 bg-gray-100 shadow-md rounded-2xl'>
      <h2 className='text-3xl font-bold text-center items-center text-blue-600 mb-4'>
        🏋️‍♀️ Health and Wellness Form 🏋️‍♀️
      </h2>
      

      {/* Name */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Name *</label>
        <input
          type='text'
          value={form.name}
          onChange={e => handleChange('name', e.target.value)}
          className={`w-full p-2 border rounded-xl ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <div className='text-red-500'>{errors.name}</div>}
      </div>

      {/* Email */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Email *</label>
        <input
          type='email'
          value={form.email}
          onChange={e => handleChange('email', e.target.value)}
          className={`w-full p-2 border rounded-xl ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <div className='text-red-500'>{errors.email}</div>}
      </div>

      {/* Age */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Age *</label>
        <input
          type='number'
          value={form.age}
          onChange={e => handleChange('age', e.target.value)}
          className={`w-full p-2 border rounded-xl ${
            errors.age ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.age && <div className='text-red-500'>{errors.age}</div>}
      </div>

      {/* Gender */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Gender *</label>
        <select
          value={form.gender}
          onChange={e => handleChange('gender', e.target.value)}
          className={`w-full p-2 border rounded-xl ${
            errors.gender ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value=''>Select</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Other'>Other</option>
        </select>
        {errors.gender && <div className='text-red-500'>{errors.gender}</div>}
      </div>

      {/* Height */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Height (cm) *</label>
        <input
          type='number'
          value={form.height}
          onChange={e => handleChange('height', e.target.value)}
          className={`w-full p-2 border rounded-xl ${
            errors.height ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.height && <div className='text-red-500'>{errors.height}</div>}
      </div>

      {/* Weight */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Weight (kg) *</label>
        <input
          type='number'
          value={form.weight}
          onChange={e => handleChange('weight', e.target.value)}
          className={`w-full p-2 border rounded-xl ${
            errors.weight ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.weight && <div className='text-red-500'>{errors.weight}</div>}
      </div>

      {/* Sleep Duration */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Sleep Duration (hrs)</label>
        <input
          type='range'
          min='3'
          max='12'
          value={form.sleep}
          onChange={e => handleChange('sleep', e.target.value)}
          className='w-full'
        />
        <div className='text-sm text-center'>
          {form.sleep} hrs{' '}
          {form.sleep < 6 ? '😴' : form.sleep < 8 ? '😐' : '😊'}
        </div>
      </div>

      {/* Exercise */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Exercise Frequency *</label>
        <select
          value={form.exerciseFrequency}
          onChange={e => handleChange('exerciseFrequency', e.target.value)}
          className={`w-full p-2 border rounded-xl ${
            errors.exerciseFrequency ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value=''>Select</option>
          <option value='None'>None</option>
          <option value='1-2x'>1–2x / week</option>
          <option value='3-5x'>3–5x / week</option>
          <option value='6+x'>6+ / week</option>
        </select>
        {errors.exerciseFrequency && (
          <div className='text-red-500'>{errors.exerciseFrequency}</div>
        )}
      </div>

      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Exercise Type *</label>
        <select
          value={form.exerciseType}
          onChange={e => handleChange('exerciseType', e.target.value)}
          className={`w-full p-2 border rounded-xl ${
            errors.exerciseType ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value=''>Select</option>
          <option value='Cardio'>Cardio</option>
          <option value='Strength'>Strength</option>
          <option value='Yoga'>Yoga</option>
          <option value='Mixed'>Mixed</option>
        </select>
        {errors.exerciseType && (
          <div className='text-red-500'>{errors.exerciseType}</div>
        )}
      </div>

      {/* Water Intake */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>
          Water Intake (liters/day) *
        </label>
        <input
          type='number'
          step='0.1'
          value={form.waterIntake}
          onChange={e => handleChange('waterIntake', e.target.value)}
          className={`w-full p-2 border rounded-xl ${
            errors.waterIntake ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.waterIntake && (
          <div className='text-red-500'>{errors.waterIntake}</div>
        )}
      </div>

      {/* Allergies */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Allergies *</label>
        <input
          type='text'
          value={form.allergies}
          onChange={e => handleChange('allergies', e.target.value)}
          className={`w-full p-2 border rounded-xl ${
            errors.allergies ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.allergies && (
          <div className='text-red-500'>{errors.allergies}</div>
        )}
      </div>

      {/* Alcohol */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>
          Alcohol Consumption *
        </label>
        <select
          value={form.alcohol}
          onChange={e => handleChange('alcohol', e.target.value)}
          className={`w-full p-2 border rounded-xl ${
            errors.alcohol ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value=''>Select</option>
          <option value='None'>None</option>
          <option value='Occasionally'>Occasionally</option>
          <option value='Frequently'>Frequently</option>
        </select>
        {errors.alcohol && <div className='text-red-500'>{errors.alcohol}</div>}
      </div>

      {/* Smoking */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Do you smoke? *</label>
        <input
          type='checkbox'
          checked={form.smoking}
          onChange={e => handleChange('smoking', e.target.checked)}
          className='mr-2'
        />
        <span>{form.smoking ? 'Yes' : 'No'}</span>
      </div>

      {/* Stress Level */}
      <div className='mb-4'>
        <label className='block mb-1 text-gray-700'>Stress Level *</label>
        <input
          type='range'
          min='1'
          max='10'
          value={form.stress}
          onChange={e => handleChange('stress', e.target.value)}
          className='w-full'
        />
        <div className='text-sm text-center'>
          Level: {form.stress}{' '}
          {form.stress < 4 ? '😄' : form.stress < 7 ? '😐' : '😨'}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        type='submit'
        className='mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700'
      >
        Submit
      </button>
    </div>
  )
}

export default HealthForm
