import { managePersonResults } from '@/lib/fetchers';
import PersonTable from '@/app/admin/manage-person/_components/personTable';
import { memberAttributeResults } from '@/lib/actions';

const ManagePersonTable = async (searchParams) => {
    const searchUid = searchParams.searchParams.searchUid;
    const groupingsInfo = await managePersonResults(searchUid);
    const userInfo = (await memberAttributeResults([searchUid])).results[0];
    const props = { groupingsInfo: groupingsInfo, userInfo: userInfo, searchUid: searchUid };

    return (
        <>
            <PersonTable {...props} />
        </>
    );
};

export default ManagePersonTable;
