import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import AdminsTab from '@/app/admin/@tab/manage-admins/page';
import GroupingsTab from '@/app/admin/@tab/manage-groupings/page';
import PersonTab from '@/app/admin/@tab/manage-person/page';
import Link from 'next/link';

const Admin = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
    return (
        <>
            <h1>test</h1>
            <h1>test2</h1>
        </>
        // <Tabs className="bg-seafoam" defaultValue={`manage-groupings`}>
        //     <div className="container">
        //         <TabsList variant="outline">
        //             <Link key={'groupings'} href={`/admin/manage-groupings`} replace>
        //                 <TabsTrigger value="manage-groupings" variant="outline">
        //                     Manage Groupings
        //                 </TabsTrigger>
        //             </Link>
        //             <Link key={'admins'} href={'/admin/manage-admins'} replace>
        //                 <TabsTrigger value="manage-admins" variant="outline">
        //                     Manage Admins
        //                 </TabsTrigger>
        //             </Link>
        //             <Link key={'person'} href={'/admin/manage-person'} replace>
        //                 <TabsTrigger value="manage-person" variant="outline">
        //                     Manage Person
        //                 </TabsTrigger>
        //             </Link>
        //         </TabsList>
        //     </div>
        //     <TabsContent value="manage-groupings">
        //         <div className="bg-white">
        //             <div className="container">{<GroupingsTab />}</div>
        //         </div>
        //     </TabsContent>
        //     <TabsContent value="manage-admins">
        //         <div className="bg-white">
        //             <div className="container">{<AdminsTab />}</div>
        //         </div>
        //     </TabsContent>
        //     <TabsContent value="manage-person">
        //         <div className="bg-white">
        //             <div className="container">{<PersonTab searchParams={searchParams} />}</div>
        //         </div>
        //     </TabsContent>
        // </Tabs>
    );
};

export default Admin;
