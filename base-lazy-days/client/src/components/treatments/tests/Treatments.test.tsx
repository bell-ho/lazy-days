import { renderWithQueryClient } from '../../../test-utils';
import { Treatments } from '../Treatments';
import { screen } from '@testing-library/react';

test('renders response from query', async () => {
  renderWithQueryClient(<Treatments />);

  const treatmentTitles = await screen.findByRole('heading', {
    name: /massage|facial|scrup/i,
  });

  expect(treatmentTitles).toHaveLength(3);
});
