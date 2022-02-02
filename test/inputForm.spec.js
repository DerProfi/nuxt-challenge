import {render, screen, fireEvent} from '@testing-library/vue'
import inputForm from '@/components/inputForm.vue'

describe('inputForm.vue', () => {
  it('emits the event', async () => {
    const{emitted} = render(inputForm)
    const button = screen.getByText('Search')
    await fireEvent.update(
      screen.getByLabelText('Username'),
      'derprofi'
    )
    fireEvent.click(button)
    expect(emitted().submit[0][0]).toEqual('derprofi')
  })
})
