<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(path="/api/v1/harem")
 */
class HaremController extends AbstractController
{

    /**
     * @Route(path="/test", name="harem_test", methods={"POST"})
     * @return JsonResponse
     */
    public function test(): JsonResponse
    {
        return new JsonResponse([
            'test' => "test"
        ]);
    }

}