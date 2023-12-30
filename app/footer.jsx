

export default function Footer() {
    const current_year = new Date().getFullYear();
    return(
        <div id="section_footer ">
        <div className='bg-teal-100 text-center py-4 pb-8  transition-all dark:text-black'>
          <p>Copyright © {current_year}, @jsphyaps, All Rights Reserved.</p>
        </div>
      </div>
    )
}