export default function SectionHeader({ title, href }) {
    return (
        <div className='mb-8 flex flex-row w-full justify-center'>
            <h2 className='text-5xl font-bold py-2'>{title}</h2>
        </div>
    );
}
