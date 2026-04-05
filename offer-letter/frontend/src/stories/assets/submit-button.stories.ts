import type { Meta, StoryObj } from '@storybook/angular';
import { SubmitButtonComponent } from '../../app/submit-button-component/submit-button-component';

const meta: Meta<SubmitButtonComponent> = {
  title: 'Components/SubmitButton',
  component: SubmitButtonComponent,
};

export default meta;
type Story = StoryObj<SubmitButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Submit Application',
  },
};

export const Loading: Story = {
  args: {
    label: 'Submit Application',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Submit Application',
    disabled: true,
  },
};