import type { Meta, StoryObj } from '@storybook/angular';
import { NumberBoxComponent } from '../../app/number-box-component/number-box-component';


const meta: Meta<NumberBoxComponent> = {
  title: 'Components/NumberBox',
  component: NumberBoxComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<NumberBoxComponent>;

export const Default: Story = {
  args: {},
};