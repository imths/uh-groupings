import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ManageGroupingsTable from '@/app/admin/manage-groupings/manageGroupingsTable';
import ManageAdminsTable from '@/app/admin/manage-admins/manageAdminsTable';
import ManagePersonTable from '@/app/admin/manage-person/managePersonTable';
import Link from 'next/link';

const GroupingsTable = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    return (
        <Tabs className="bg-seafoam" defaultValue={`manage-groupings`}>
            <div className="container">
                <TabsList variant="outline">
                    <Link key={'groupings'} href={`/admin/manage-groupings`} replace>
                        <TabsTrigger value="manage-groupings" variant="outline">
                            Manage Groupings
                        </TabsTrigger>
                    </Link>
                    <Link key={'admins'} href={'/admin/manage-admins'} replace>
                        <TabsTrigger value="manage-admins" variant="outline">
                            Manage Admins
                        </TabsTrigger>
                    </Link>
                    <Link key={'person'} href={'/admin/manage-person'} replace>
                        <TabsTrigger value="manage-person" variant="outline">
                            Manage Person
                        </TabsTrigger>
                    </Link>
                </TabsList>
            </div>
            <TabsContent value="manage-groupings">
                <div className="bg-white">
                    <div className="container">{<ManageGroupingsTable />}</div>
                </div>
            </TabsContent>
            <TabsContent value="manage-admins">
                <div className="bg-white">
                    <div className="container">{<ManageAdminsTable />}</div>
                </div>
            </TabsContent>
            <TabsContent value="manage-person">
                <div className="bg-white">
                    <div className="container">{<ManagePersonTable searchParams={searchParams} />}</div>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default GroupingsTable;
