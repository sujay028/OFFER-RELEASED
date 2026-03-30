import type { Meta, StoryObj } from '@storybook/angular';
import { FileUploadComponent } from '../app/file-upload-component/file-upload-component';


const meta: Meta<FileUploadComponent> = {
  title: 'Components/FileUpload',
  component: FileUploadComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<FileUploadComponent>;

export const Default: Story = {
  args: {},
};