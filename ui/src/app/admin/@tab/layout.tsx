import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminTabsLayout = ({ children }: { children: React.ReactNode }) => {
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
            {children}
        </>
    );
};

export default AdminTabsLayout;
