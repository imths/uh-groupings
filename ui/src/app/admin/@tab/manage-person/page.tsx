import { managePersonResults } from '@/lib/fetchers';
import PersonTable from '@/app/admin/_components/personTable';
import { memberAttributeResults } from '@/lib/actions';

const PersonTab = async (searchParams) => {
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

export default PersonTab;
