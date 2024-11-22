import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PersonTableTooltip from '@/app/admin/_components/personTableTooltip';

window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn()
    }));

describe('PersonTableTooltip', () => {
    it('renders Person Table Tooltip', async () => {
        render(
            <PersonTableTooltip test={<button>Test Text</button>} value={'Test Value'} side={'top'}>
                {/*<button>Test Text</button>*/}
            </PersonTableTooltip>
        );
        expect(screen.getByRole('button')).toBeInTheDocument();
        // fireEvent.mouseOver(screen.getByRole('button'));
        // await waitFor(() => screen.getByTestId('person-table-tooltip'));
        // expect(screen.getByTestId('person-table-tooltip')).toBeInTheDocument();
        const button = screen.getByRole('button');
        await waitFor(async () => {
            await userEvent.hover(button);
            expect(screen.getAllByTestId('person-table-tooltip')[0]).toBeInTheDocument();
        });
        // // Wait for the tooltip to appear
        // await waitFor(() => {
        //     expect(screen.getByTestId('person-table-tooltip')).toBeInTheDocument();
        // });
    });
});
