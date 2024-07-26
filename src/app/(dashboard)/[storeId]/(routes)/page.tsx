import prismadb from "@/lib/prismadb";

interface DashboardPageParams {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageParams> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>Active store {store?.name}</div>;
};

export default DashboardPage;
