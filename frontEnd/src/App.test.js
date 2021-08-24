import React  from 'react';
import App from './App';

import { shallow } from 'enzyme';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { BalanceInvested } from './components/BalanceInvested';
import { CurrentBid } from './components/CurrentBid';
import { AddBid } from './components/AddBid';

import GlobalContext, { useMyContext } from "./TestContext";
import * as MyContextModule from "./TestContext";
import toJson from "enzyme-to-json";

describe('snapshots', () => {
    it('Balance snapshot', () => {
        const wrapper = shallow(<Balance />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });        
    it('App snapshot', () => {
        const wrapper = shallow(<App />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });        
    it('BalanceInvested snapshot', () => {
        const wrapper = shallow(<BalanceInvested />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });        
    it('Current Bids list snapshot', () => {
        const wrapper = shallow(<CurrentBid />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });        
    it('Add Bid snapshot', () => {
        const wrapper = shallow(<AddBid />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });        
});

describe('rendering components', () => {        
    it('renders Balance component without crashing', () => {
        jest.spyOn(MyContextModule, "useMyContext").mockImplementation(() => ({
            bankbalance: 1000000
        }));
        const wrapper = shallow( <GlobalContext.Provider>
            <Balance />
          </GlobalContext.Provider>).dive();
        expect(wrapper.text()).toEqual("Your Account BalanceRs 100000");
    });
    it('renders Header component without crashing', () => {
        const wrapper = shallow(<Header />);
        const header = (<div><h2>IPO Batwa</h2></div>)
        expect(wrapper.contains(header)).toEqual(true);
    });
    it('renders Balance component with provider', () => {
        const wrapper = mount(
            <UserContext.Provider 
            value={{
              dispatch: jest.fn(),
              user: { firstname: "Alice", lastname: "Middleman" }
              loading: false
            }}>
              <Greeting />
            </UserContext.Provider>);
          expect(wrapper.find("h1").text()).toEqual("Hello Alice Middleman");
    });

});
