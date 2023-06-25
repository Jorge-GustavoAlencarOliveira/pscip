import React from 'react';
import Link from 'next/link';

const Signin = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className='m-auto w-full'>
        <h1 className="h-20 text-center text-3xl font-bold">LOGOTIPO</h1>
        <form className="flex flex-col w-11/12 m-auto">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50  outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 outline-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
              />
            </div>
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Lembrar-me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Acessar
          </button>
        </form>
        <p className='text-center mt-4'>Você ainda não possui conta? <strong><Link href='/login/signup'>Cadastre-se</Link></strong></p>
      </div>
    </div>
  );
};

export default Signin;
