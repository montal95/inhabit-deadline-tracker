import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

const Profile = () => {
  const router = useRouter();
  const { userID } = router.query;

  return (
    <Layout>
      <Card>
        <h1>{userID}</h1>
      </Card>
    </Layout>
  );
};

export default Profile;
