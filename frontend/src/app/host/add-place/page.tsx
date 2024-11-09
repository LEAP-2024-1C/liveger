import AddAvailableTodo from "@/app/components/host/add_ger/add_available_todo";

export default function AddPlace() {
  return (
    <div
      className={`py-4 flex flex-col gap-4 sm:py-8 min-h-[100vh] card-${homeId}`}
    >
      <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 gap-4">
        <AddPhoto image_data={images} />
        <EditTitel title={title} setTitle={setTitle} />
        <EditDescription
          description={description}
          setDescription={setDescription}
        />
        <EditPrice price={price} setPrice={setPrice} />
        <EditGuestNumber
          guest_number={guestNumber}
          setGuestNumber={setGuestNumber}
        />
        <AddAvailableTodo
          available_todo={availableTodo}
          setAvailableTodo={setAvailableTodo}
        />
      </div>
      <Button onClick={handleSubmit}>Өөрчлөлтийг хадгалах</Button>
    </div>
  );
}
