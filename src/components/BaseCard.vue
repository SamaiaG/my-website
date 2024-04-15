<template>
    <div class="card">
      <slot></slot>
    </div>
  </template>
  
  <style scoped>
  .card {
    display: flex;
    flex-direction: column;
    padding: 5rem;
    margin: 4rem 6%;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
  </style>
  