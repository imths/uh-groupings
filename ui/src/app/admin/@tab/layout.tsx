import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GroupingsTab from '@/app/admin/@tab/manage-groupings/page';
import AdminsTab from '@/app/admin/@tab/manage-admins/page';
import PersonTab from '@/app/admin/@tab/manage-person/page';

const AdminTabsLayout = () => {
    return (
        <Tabs className="bg-seafoam" defaultValue="manage-groupings">
            <div className="container">
                <TabsList variant="outline">
                    <TabsTrigger value="manage-groupings" variant="outline">
                        Manage Groupings
                    </TabsTrigger>
                    <TabsTrigger value="manage-admins" variant="outline">
                        Manage Admins
                    </TabsTrigger>
                    <TabsTrigger value="manage-person" variant="outline">
                        Manage Person
                    </TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="manage-groupings">
                <div className="bg-white">
                    <div className="container">{<GroupingsTab />}</div>
                </div>
            </TabsContent>
            <TabsContent value="manage-admins">
                <div className="bg-white">
                    <div className="container">{<AdminsTab />}</div>
                </div>
            </TabsContent>
            <TabsContent value="manage-person">
                <div className="bg-white">
                    <div className="container">{<PersonTab />}</div>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default AdminTabsLayout;
