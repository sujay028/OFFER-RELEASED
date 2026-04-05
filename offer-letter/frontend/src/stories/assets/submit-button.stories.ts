import type { Meta, StoryObj } from '@storybook/angular';
import { SubmitButtonComponent } from '../../app/submit-button-component/submit-button-component';


const meta: Meta<SubmitButtonComponent> = {
  title: 'Components/SubmitButton',
  component: SubmitButtonComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SubmitButtonComponent>;

export const Default: Story = {
  args: {},
};