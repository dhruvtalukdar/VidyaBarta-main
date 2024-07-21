import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import validator from "validator";

const schema = z.object({
  adressLine1: z.string().nonempty("Adress Line 1 is required"),
  city: z.string().nonempty('City / Town is required'),
  phoneNumber: z.string().refine(validator.isMobilePhone),
  district: z.string().nonempty('District is required'),
  state: z.string().nonempty('State is required'),
  postOffice: z.string().nonempty('Post Office is required'),
  pin: z.string().nonempty('Pin is required'),
  policeStation: z.string().nonempty('Police Station is required'),
  phone: z.string()
  .nonempty('Phone Number is required')
  .regex(/^[0-9]{10}$/, 'Invalid phone number'),
  email: z.string()
    .nonempty('Email is required')
    .email('Invalid email address'),
  adress: z.string().nonempty('Address is required '),
});


const ContactDetailsPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
    alert("Form submitted succesfully");
  }


  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className='text-2xl font-bold mb-6'>Permanent Address</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-gray-700'>Address Line 1<span className='text-red-500 ml-1'>*</span></label>
            <input type='text' className='w-full mt-2 p-2 border rounded' {...register('adressLine1')}/>
            {errors.adressLine1 && <p className="text-red-600">{errors.adressLine1.message}</p>}
          </div>
          <div>
            <label className='block text-gray-700'>Address Line 2</label>
            <input type='text' className='w-full mt-2 p-2 border rounded'/>
          </div>
          <div>
            <label className='block text-gray-700'>Landmark</label>
            <input type='text' className='w-full mt-2 p-2 border rounded'/>
          </div>
          <div>
            <label className='block text-gray-700'>City / Town<span className='text-red-500 ml-1'>*</span></label>
            <input type='text' className='w-full mt-2 p-2 border rounded' {...register('city')} />
            {errors.city && <p className="text-red-600">{errors.city.message}</p>}
          </div>
          <div>
            <label className='block text-gray-700'>District<span className='text-red-500 ml-1'>*</span></label>
            <input type='text' className='w-full mt-2 p-2 border rounded' {...register('district')}/>
            {errors.district && <p className="text-red-600">{errors.district.message}</p>}
          </div>
          <div>
            <label className='block text-gray-700'>State<span className='text-red-500 ml-1'>*</span></label>
            <input type='text' className='w-full mt-2 p-2 border rounded' {...register('state')}/>
            {errors.state && <p className="text-red-600">{errors.state.message}</p>}
          </div>
          <div>
            <label className='block text-gray-700'>Post Office<span className='text-red-500 ml-1'>*</span></label>
            <input type='text' className='w-full mt-2 p-2 border rounded' {...register('postOffice')}/>
            {errors.postOffice && <p className="text-red-600">{errors.postOffice.message}</p>}
          </div>
          <div>
            <label className='block text-gray-700'>Pin<span className='text-red-500 ml-1'>*</span></label>
            <input type='text' className='w-full mt-2 p-2 border rounded' {...register('pin')}/>
            {errors.pin && <p className="text-red-600">{errors.pin.message}</p>}
          </div>
          <div>
            <label className='block text-gray-700'>Police Station</label>
            <input type='text' className='w-full mt-2 p-2 border rounded' />
          </div>
          <div>
            <label className='block text-gray-700'>Railway Station</label>
            <input type='text' className='w-full mt-2 p-2 border rounded'/>
          </div>
          <div>
            <label className='block text-gray-700'>Phone Number<span className='text-red-500 ml-1'>*</span></label>
            <input type='text' className='w-full mt-2 p-2 border rounded' {...register('phone')}/>
            {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
          </div>
          <div>
            <label className='block text-gray-700'>Email Id<span className='text-red-500 ml-1'>*</span></label>
            <input type='text' className='w-full mt-2 p-2 border rounded' {...register('email')}/>
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="w-full mt-2 p-2 bg-indigo-500 hover:bg-indigo-600 transition duration-300 text-white rounded">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactDetailsPage;