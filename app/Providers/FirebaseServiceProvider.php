<?php

namespace App\Providers;

use Kreait\Firebase;
use Kreait\Firebase\ServiceAccount;
use Kreait\Firebase\Factory as FirebaseFactory;

use Illuminate\Support\ServiceProvider;

class FirebaseServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(Firebase::class, function () {
            $servieAccountPath = \Config::get('firebase.servie_account_path');
            $databaseUri       = \Config::get('firebase.database_uri');

            return (new FirebaseFactory())
                ->withServiceAccount(ServiceAccount::fromJsonFile(base_path($servieAccountPath)))
                ->withDatabaseUri($databaseUri)
                ->create();
        });

        $this->app->alias(Firebase::class, 'firebase');
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
