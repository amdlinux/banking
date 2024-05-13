import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = { firstname:"Akhil", lastname:"D", email:"AkhilD@gmail.com" }

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstname || 'Guest'}
            subtext='Access & Manage your account and transaction efficiently'
          />
          <TotalBalanceBox
            totalCurrentBalance={1225.45}
          />
        </header>
        Recent transactions
      </div>
      <RightSidebar
        user={ loggedIn }
        transactions={[]} 
        banks = {[{currentBalance:123.50},{currentBalance:200.60}]}
        />
    </section>
  )
}

export default Home