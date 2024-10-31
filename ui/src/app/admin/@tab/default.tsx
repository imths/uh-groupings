import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import AdminsTab from '@/app/admin/@tab/manage-admins/page';
import GroupingsTab from '@/app/admin/@tab/manage-groupings/page';
import PersonTab from '@/app/admin/@tab/manage-person/page';

const AdminDefault = () => {
    return (
        <>
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
            </Tabs>
            <GroupingsTab />
        </>
    );
};

export default AdminDefault;
