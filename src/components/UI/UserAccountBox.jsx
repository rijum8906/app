import { Avatar, Card, Button } from 'flowbite-react';
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from './../../api/axios';
import { toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';

const UserAccountBox = () => {
  const { token } = useSelector(state => state.auth);

  const user = token ? JSON.parse(atob(token.split('.')[1])) : null;

  const linkAccountWithGoogle = async token => {
    const res = await axios.post('/auth/link-account', {
      token,
      linkWith: 'google'
    });
    console.log(res);
    if (res.data.status) {
      toast.success('Account successfully linked.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Card>
        <div className="relative">
          {/* Edit Icon */}
          <Link to="edit">
            <HiOutlinePencilAlt
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white cursor-pointer"
              size={22}
              title="Edit Profile"
            />
          </Link>

          {/* Avatar and Basic Info */}
          <div className="flex flex-col items-center text-center mt-2 mb-6">
            <Avatar
              img={
                user?.avatarURL ||
                'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              }
              alt="Profile picture"
              rounded
              size="xl"
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{`${user?.firstName || 'First'} ${user?.lastName || 'Last'}`}</h2>
            <p className="text-gray-500 dark:text-gray-400">
              {user?.email || 'user@example.com'}
            </p>
          </div>

          {/* Account Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Username
              </h4>
              <p className="text-gray-900 dark:text-white">
                {user?.username || 'username123'}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Location
              </h4>
              <p className="text-gray-900 dark:text-white">
                {user?.location || 'Not specified'}
              </p>
            </div>
            <div className="sm:col-span-2">
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Bio
              </h4>
              <p className="text-gray-900 dark:text-white">
                {user?.bio || 'No bio provided.'}
              </p>
            </div>
          </div>

          {/* Delete Button */}
          <div className="flex justify-center mt-6">
            <Link to="delete">
              <Button color="red" size="sm">
                <HiOutlineTrash className="mr-2" />
                Delete Account
              </Button>
            </Link>
            <Button>
              <GoogleLogin
                onSuccess={async data => {
                  await linkAccountWithGoogle(data.credential);
                }}
              />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserAccountBox;
