import CreateCollectionsForm from "@/components/forms/collections/CreateCollectionsForm";

export default function CreateCollectionPage() {
  return (
    <div className="flex flex-col gap-4 p-6 shadow-sm">
      <header className="flex justify-between">
        <h2 className="text-lg font-semibold">New Collection</h2>
      </header>

      <CreateCollectionsForm />
    </div>
  );
}
