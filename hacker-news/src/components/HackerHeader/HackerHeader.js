import React from 'react';
import '../Articles/Articles.css';
import { HackerNav } from '../HackerNav/HackerNav';


export const HackerHeader = () => {
    return (
      <header id="hacker-header">
        <span id="hacker-logo">Y</span>
        <h3 id="hacker-title">Hacker News</h3>
          <HackerNav>
              <li>news</li>
              <li>threads</li>
              <li>comments</li>
              <li>show</li>
              <li>ask</li>
              <li>jobs</li>
              <li>submit</li>
          </HackerNav>
      </header>
    );
}
