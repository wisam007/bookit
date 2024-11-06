import Heading from "@/components/Heading";

const AddRoomPage = () => {
  return (
    <>
      <Heading title={"Add a Room"} />
      <div class="bg-white shadow-lg rounded-lg p-6 w-full">
        <form>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">
              Room Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter a name (Large Conference Room)"
              required
            />
          </div>

          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              class="border rounded w-full h-24 py-2 px-3"
              placeholder="Enter a description for the room"
              required
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="sqft" class="block text-gray-700 font-bold mb-2">
              Square Feet
            </label>
            <input
              type="number"
              id="sqft"
              name="sqft"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter room size in ft"
              required
            />
          </div>

          <div class="mb-4">
            <label for="capacity" class="block text-gray-700 font-bold mb-2">
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              class="border rounded w-full py-2 px-3"
              placeholder="Number of people the room can hold"
              required
            />
          </div>

          <div class="mb-4">
            <label
              htmlFor="price_per_hour"
              class="block text-gray-700 font-bold mb-2"
            >
              Price Per Hour
            </label>
            <input
              type="number"
              id="price_per_hour"
              name="price_per_hour"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter price per hour"
              required
            />
          </div>

          <div class="mb-4">
            <label for="address" class="block text-gray-700 font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter full address"
              required
            />
          </div>

          <div class="mb-4">
            <label for="location" class="block text-gray-700 font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              class="border rounded w-full py-2 px-3"
              placeholder="Location (Building, Floor, Room)"
              required
            />
          </div>

          <div class="mb-4">
            <label
              for="availability"
              class="block text-gray-700 font-bold mb-2"
            >
              Availability
            </label>
            <input
              type="text"
              id="availability"
              name="availability"
              class="border rounded w-full py-2 px-3"
              placeholder="Availability (Monday - Friday, 9am - 5pm)"
              required
            />
          </div>

          <div class="mb-4">
            <label for="amenities" class="block text-gray-700 font-bold mb-2">
              Amenities
            </label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              class="border rounded w-full py-2 px-3"
              placeholder="Amenities CSV (projector, whiteboard, etc.)"
              required
            />
          </div>

          {/* Image Upload */}
          <div class="mb-8">
            <label for="image" class="block text-gray-700 font-bold mb-2">
              Image
            </label>

            <input
              type="file"
              id="image"
              name="image"
              class="border rounded w-full py-2 px-3"
            />
          </div>

          <div class="flex flex-col gap-5">
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddRoomPage;
