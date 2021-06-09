import React from 'react'

const Footer = () => {
  return (
    <>
      {/* -- Footer-- */}
      <footer className='bg-light py-5'>
        <div className='container'>
          <div className='small text-center text-muted'>
            Copyright &copy;
            {/* -- This script automatically adds the current year to your website footer- */}
            {/* -- (credit: https://updateyourfooter.com/)-- */}
            <script>document.write(new Date().getFullYear());</script>- Company
            Name
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
