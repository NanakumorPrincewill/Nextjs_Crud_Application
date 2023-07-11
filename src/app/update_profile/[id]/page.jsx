import UpdateProfileForm from "../../../components/updateProfileForm/UpdateProfileForm";

const getProfileById = async (id) => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/profiles/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Profile");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditProfile({ params }) {
  const { id } = params;
  const { profile } = await getProfileById(id);
  const {
    first_name,
    last_name,
    email,
    phone_number,
    country,
    address,
    state,
    city,
    zipcode,
  } = profile;

  return (
    <UpdateProfileForm
      id={id}
      first_name={first_name}
      last_name={last_name}
      email={email}
      phone_number={phone_number}
      country={country}
      address={address}
      state={state}
      city={city}
      zipcode={zipcode}
    />
  );
}
