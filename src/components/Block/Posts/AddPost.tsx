import { Input, Label, LayoutDashboard } from 'src/components/module';
import { useForm } from 'react-hook-form';
import { FormValue, POSTTYPE, userStatus } from 'src/utils/contants';
import Radio from 'src/components/module/Radio';
import Select from 'src/components/module/Select';
import TextArea from 'src/components/module/Input/TextArea';
import UploadImage from 'src/components/module/Upload';

const AddPost = () => {
  const { control, handleSubmit, setValue, watch } = useForm<
    POSTTYPE | FormValue
  >();
  const watchStatus = watch('status');

  const handleCreatePost = (values: POSTTYPE | FormValue) => {
    console.log(values);
  };
  return (
    <>
      <LayoutDashboard />
      <section className='bg-white mt-20'>
        <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
          <h2 className='mb-4 text-2xl font-bold text-gray-900'>
            Add a new post
          </h2>
          <form onSubmit={handleSubmit(handleCreatePost)}>
            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
              {/* title */}
              <div className='sm:col-span-2'>
                <Label name='title'>Title</Label>
                <Input
                  name='title'
                  placeholder='Enter title...'
                  type='text'
                  control={control}
                ></Input>
              </div>
              {/* author */}
              <div className='w-full'>
                <Label name='author'>Author</Label>
                <Input
                  name='author'
                  placeholder='Enter author...'
                  type='text'
                  control={control}
                ></Input>
              </div>

              {/* slug */}
              <div className='w-full'>
                <Label name='slug'>Slug</Label>
                <Input
                  name='slug'
                  placeholder='Slug will auto follow title...'
                  type='text'
                  control={control}
                  isDisabled={true}
                ></Input>
              </div>
              {/* category */}
              <div>
                <Label name='category'>Category</Label>
                <Select name='category' control={control}></Select>
              </div>

              {/* status */}
              <div>
                <Label name='status'>Status</Label>
                <div className='flex items-center gap-3'>
                  <Radio
                    checked={watchStatus === userStatus.ACTIVE}
                    name='status'
                    control={control}
                    onClick={() => setValue('status', userStatus.ACTIVE)}
                    value={userStatus.ACTIVE}
                    label={userStatus.ACTIVE}
                  />
                  <Radio
                    checked={watchStatus === userStatus.PENDING}
                    name='status'
                    control={control}
                    onClick={() => setValue('status', userStatus.PENDING)}
                    value={userStatus.PENDING}
                    label={userStatus.PENDING}
                  />
                  <Radio
                    checked={watchStatus === userStatus.BANNER}
                    name='status'
                    control={control}
                    onClick={() => setValue('status', userStatus.BANNER)}
                    value={userStatus.BANNER}
                    label={userStatus.BANNER}
                  />
                </div>
              </div>

              {/* desc */}
              <div className='w-full'>
                <Label name='desc'>Description</Label>
                <TextArea
                  name='desc'
                  placeholder='Enter your desc....'
                  control={control}
                ></TextArea>
              </div>

              <div className='w-full'>
                <UploadImage></UploadImage>
              </div>
            </div>
            <button
              type='submit'
              className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddPost;
