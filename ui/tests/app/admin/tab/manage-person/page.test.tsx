import { render, screen, waitFor } from '@testing-library/react';
import PersonTab from '@/app/admin/@tab/manage-person/page';
import * as Fetchers from '@/lib/fetchers';
import * as Actions from '@/lib/actions';
import { MembershipResults } from '@/lib/types';
import { MemberResult } from '@/lib/types';

jest.mock('@/lib/fetchers');
jest.mock('@/lib/actions');

const mockData: MembershipResults = {
    resultCode: 'SUCCESS',
    results: Array.from({ length: 10 }, (_, i) => ({
        inBasis: true,
        inInclude: true,
        inExclude: false,
        inOwner: true,
        inBasisAndInclude: true,
        optOutEnabled: true,
        optInEnabled: true,
        selfOpted: false,
        path: `tmp:example:example-${i}`,
        name: `example-${i}`,
        description: `Test Description ${i}`
    }))
};

const mockUser: MemberResult = {
    uid: 'test-uid',
    uhUuid: 'test-uhUuid',
    name: 'test-name',
    firstName: 'test-first',
    lastName: 'test-last'
};

const searchParams = {
    params: {},
    searchParams: { searchUid: 'mockUid' }
};

beforeEach(() => {
    jest.spyOn(Fetchers, 'managePersonResults').mockResolvedValue(mockData);
    jest.spyOn(Actions, 'memberAttributeResults').mockResolvedValue(mockData);
});

describe('PersonTab', () => {
    it('renders Manage Person tab', async () => {
        render(await PersonTab(searchParams));
        await waitFor(async () => {
            expect(screen.getByRole('table')).toBeInTheDocument();
        });

        await waitFor(async () => {
            mockData.results.forEach((group) => {
                expect(screen.getByText(group.inBasis)).toBeInTheDocument();
                expect(screen.getByText(group.inInclude)).toBeInTheDocument();
                expect(screen.getByText(group.inExclude)).toBeInTheDocument();
                expect(screen.getByText(group.inOwner)).toBeInTheDocument();
                expect(screen.getByText(group.inBasisAndInclude)).toBeInTheDocument();
                expect(screen.getByText(group.optOutEnabled)).toBeInTheDocument();
                expect(screen.getByText(group.optInEnabled)).toBeInTheDocument();
                expect(screen.getByText(group.selfOpted)).toBeInTheDocument();
                expect(screen.getByText(group.name)).toBeInTheDocument();
            });
        });
    });
});
