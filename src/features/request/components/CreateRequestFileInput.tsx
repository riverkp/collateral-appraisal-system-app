import Icon from '@/shared/components/Icon';
import FileInput from '@/shared/components/inputs/FileInput';
import axios from 'axios';
import clsx from 'clsx';

const CreateRequestFileInput = () => {
  // TODO: (Wait for more info)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      console.log(e.target.files);
    }
    if (!e.target.files?.length) {
      return;
    }
    axios
      .postForm('https://localhost:7111/documents/a/1', {
        Files: e.target.files[0],
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
  return (
    <FileInput onChange={handleChange}>
      <div className={clsx('w-full', 'border-2', 'border-dashed', 'border-slate-200', 'p-10')}>
        <div className={clsx('flex', 'flex-col', 'gap-5', 'items-center', 'justify-center')}>
          <Icon style="solid" name="folder-open" className="text-6xl" />
          <p>Drag and drop your files here or choose files</p>
        </div>
      </div>
    </FileInput>
  );
};

export default CreateRequestFileInput;
