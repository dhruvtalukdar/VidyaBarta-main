import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
  studentid: z.string().nonempty('student ID is required'),
  firstName: z.string().nonempty('First Name is required'),
  middleName: z.string().optional(),
  lastName: z.string().nonempty('Last Name is required'),
  schoolName: z.string().nonempty('School Name is required'),
  class: z.string().nonempty('Class is required'),
  section: z.string().nonempty('Section is required'),
  classRollNumber: z.string().nonempty('Class Roll Number is required'),
  fatherName: z.string().nonempty('Father\'s Name is required'),
  fatherOccupation: z.string().optional(),
  fatherPhone: z.string()
    .nonempty('Father\'s Phone is required')
    .regex(/^[0-9]{10}$/, 'Invalid phone number'),
  motherName: z.string().nonempty('Mother\'s Name is required'),
  motherOccupation: z.string().optional(),
  motherPhone: z.string()
    .nonempty('Mother\'s Phone is required')
    .regex(/^[0-9]{10}$/, 'Invalid phone number'),
  dateOfBirth: z.string().nonempty('Date of Birth is required'),
  gender: z.string().nonempty('Gender is required'),
  bloodGroup: z.string().nonempty('Blood Group is required'),
  vidyaBarthaCode: z.string().nonempty('vidyaBartha Code is required')
});

const BasicDetailsPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
    alert("Form submitted succesfully");
  }

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <label className="block text-gray-700">Vidyabarta Student ID<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Vidyabarta Student ID" {...register('studentid')} defaultValue="" />
            {errors.studentid && <p className="text-red-600">{errors.studentid.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">First Name<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="First Name" {...register('firstName')} defaultValue="" />
            {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Middle Name</label>
            <input type="text" className="w-full mt-2 p-2 border rounded" {...register('middleName')} placeholder="Middle Name" />
          </div>
          <div>
            <label className="block text-gray-700">Last Name<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Last Name" {...register('lastName')} defaultValue="" />
            {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">School Name<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="School Name" {...register('schoolName')} defaultValue="" />
            {errors.schoolName && <p className="text-red-600">{errors.schoolName.message}</p>} 
          </div>
          <div>
            <label className="block text-gray-700">Class<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Class" {...register('class')}/>
            {errors.class && <p className="text-red-600">{errors.class.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Section<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Section" {...register('section')} defaultValue="" />
            {errors.section && <p className="text-red-600">{errors.section.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Class Roll Number<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Class Roll Number" {...register('classRollNumber')} defaultValue="" />
            {errors.classRollNumber && <p className="text-red-600">{errors.classRollNumber.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Father's Name<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Father's Name" {...register('fatherName')} defaultValue="" />
            {errors.fatherName && <p className="text-red-600">{errors.fatherName.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Father's Occupation<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Father's Occupation" {...register('fatherOccupation')} defaultValue="" />
            {errors.fatherOccupation && <p className="text-red-600">{errors.fatherOccupation.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Father's Phone<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Father's Phone" {...register('fatherPhone')} defaultValue="" />
            {errors.fatherPhone && <p className="text-red-600">{errors.fatherPhone.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Mother's Name<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Mother's Name" {...register('motherName')} defaultValue="" />
            {errors.motherName && <p className="text-red-600">{errors.motherName.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Mother's Occupation<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Mother's Occupation" {...register('motherOccupation')} defaultValue="" />
            {errors.motherOccupation && <p className="text-red-600">{errors.motherOccupation.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Mother's Phone<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Mother's Phone" {...register('motherPhone')} defaultValue="" />
            {errors.motherPhone && <p className="text-red-600">{errors.motherPhone.message}</p>}
          </div>
          {/* <div>
            <label className="block text-gray-700">Year of Admission</label>
            <select className="w-full mt-2 p-2 border rounded">
              <option value="2020" selected>2020</option>
              {/* Add other options as needed */}
            {/* </select>
          </div> */}
          <div>
            <label className="block text-gray-700">Date of Birth<span className='text-red-500 ml-1'>*</span></label>
            <input type="date" className="w-full mt-2 p-2 border rounded" {...register('dateOfBirth')} defaultValue="" />
            {errors.dateOfBirth && <p className="text-red-600">{errors.dateOfBirth.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Gender</label>
            <select className="w-full mt-2 p-2 border rounded">
              <option value="male" selected>Male</option>
              <option value="female">Female</option>
              {/* Add other options as needed */}
            </select>
          </div>
          {/* <div>
            <label className="block text-gray-700">Caste</label>
            <select className="w-full mt-2 p-2 border rounded">
              <option value="general" selected>General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
              {/* Add other options as needed */}
            {/* </select>
          </div> */}
          <div>
            <label className="block text-gray-700">Blood Group<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Blood Group" {...register('bloodGroup')} defaultValue="" />
            {errors.bloodGroup && <p className="text-red-600">{errors.bloodGroup.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">VidyaBartha School ID<span className='text-red-500 ml-1'>*</span></label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="VidyaBartha School ID" {...register('vidyaBarthaCode')} />
            {errors.vidyaBarthaCode && <p className="text-red-600">{errors.vidyaBarthaCode.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Student Pan/UDISE ID</label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder='optional'></input>
          </div>
          <div>
            <label className='block text-gray-700'>Upload your photograph</label>
            <input type='file' className='mt-2 p-2'/>
          </div>
          {/* <div>
            <label className="block text-gray-700">Admitted Under Quota</label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Admitted Under Quota" defaultValue="UR" />
          </div> */}
          {/* <div>
            <label className="block text-gray-700">Religion</label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Religion" defaultValue="Hinduism" />
          </div> */}
          {/* <div>
            <label className="block text-gray-700">Nationality</label>
            <input type="text" className="w-full mt-2 p-2 border rounded" placeholder="Nationality" defaultValue="INDIAN" />
          </div> */}
          <div className="md:col-span-2">
            <button type="submit" className="w-full mt-2 p-2 bg-indigo-500 hover:bg-indigo-600 transition duration-300 text-white rounded">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicDetailsPage;
