import BookingForm from "@/components/BookingForm";
import Heading from "@/components/Heading";
import rooms from "@/data/rooms.json";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

const RoomPage = ({ params }) => {
  const { id } = params;
  const room = rooms.find((room) => room.$id === id);
  if (!room) {
    return <Heading title={"No room found"} />;
  }
  return (
    <>
      <Heading title={room.name} />
      <div class="bg-white shadow rounded-lg p-6">
        <Link
          href="/"
          class="flex items-center text-gray-600 hover:text-gray-800 mb-4"
        >
          <FaChevronLeft className="inline mr-1" />{" "}
          <span class="ml-2">Back to Rooms</span>
        </Link>

        <div class="flex flex-col sm:flex-row sm:space-x-6">
          <Image
            src={`/images/rooms/${room.image}`}
            alt="Grand Conference Hall"
            className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
            width={400}
            height={100}
          />

          <div class="mt-4 sm:mt-0 sm:flex-1">
            <p class="text-gray-600 mb-4">{room.description} </p>

            <ul class="space-y-2">
              <li>
                <span class="font-semibold text-gray-800">Size:</span>{" "}
                {room.sqft} sq ft
              </li>
              <li>
                <span class="font-semibold text-gray-800">Availability:</span>
                {room.availability}
              </li>
              <li>
                <span class="font-semibold text-gray-800">Price:</span>$
                {room.price_per_hour}/hour
              </li>
              <li>
                <span class="font-semibold text-gray-800">Address:</span>{" "}
                {room.address}
              </li>
            </ul>
          </div>
        </div>
        <BookingForm />
      </div>
    </>
  );
};

export default RoomPage;
