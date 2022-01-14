/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { NewProject } from '../models/new-project';
import { Project } from '../models/project';
import { ReplaceByIdProjectRequestDto } from '../models/replace-by-id-project-request-dto';
import { UpdateAllProjectRequestDto } from '../models/update-all-project-request-dto';
import { UpdateByIdProjectRequestDtoPartial } from '../models/update-by-id-project-request-dto-partial';

@Injectable({
  providedIn: 'root',
})
export class ProjectControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation projectControllerCount
   */
  static readonly ProjectControllerCountPath = '/projects/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `count()` instead.
   *
   * This method doesn't expect any request body.
   */
  count$Response(params?: {
    where?: any;
  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectControllerService.ProjectControllerCountPath, 'get');
    if (params) {
      rb.query('where', params.where, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `count$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  count(params?: {
    where?: any;
  }): Observable<Project> {

    return this.count$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Path part for operation projectControllerFindById
   */
  static readonly ProjectControllerFindByIdPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectControllerService.ProjectControllerFindByIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: {
    id: string;
  }): Observable<Project> {

    return this.findById$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Path part for operation projectControllerReplaceById
   */
  static readonly ProjectControllerReplaceByIdPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById$Response(params: {
    id: string;
    body?: ReplaceByIdProjectRequestDto
  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectControllerService.ProjectControllerReplaceByIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `replaceById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById(params: {
    id: string;
    body?: ReplaceByIdProjectRequestDto
  }): Observable<Project> {

    return this.replaceById$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Path part for operation projectControllerDeleteById
   */
  static readonly ProjectControllerDeleteByIdPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectControllerService.ProjectControllerDeleteByIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById(params: {
    id: string;
  }): Observable<Project> {

    return this.deleteById$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Path part for operation projectControllerUpdateById
   */
  static readonly ProjectControllerUpdateByIdPath = '/projects/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById$Response(params: {
    id: string;
    body?: UpdateByIdProjectRequestDtoPartial
  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectControllerService.ProjectControllerUpdateByIdPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById(params: {
    id: string;
    body?: UpdateByIdProjectRequestDtoPartial
  }): Observable<Project> {

    return this.updateById$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Path part for operation projectControllerFind
   */
  static readonly ProjectControllerFindPath = '/projects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params?: {
    filter?: any;
  }): Observable<StrictHttpResponse<Array<Project>>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectControllerService.ProjectControllerFindPath, 'get');
    if (params) {
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Project>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params?: {
    filter?: any;
  }): Observable<Array<Project>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Project>>) => r.body as Array<Project>)
    );
  }

  /**
   * Path part for operation projectControllerCreate
   */
  static readonly ProjectControllerCreatePath = '/projects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params?: {
    body?: NewProject
  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectControllerService.ProjectControllerCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params?: {
    body?: NewProject
  }): Observable<Project> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

  /**
   * Path part for operation projectControllerUpdateAll
   */
  static readonly ProjectControllerUpdateAllPath = '/projects';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll$Response(params?: {
    where?: any;
    body?: Array<UpdateAllProjectRequestDto>
  }): Observable<StrictHttpResponse<Project>> {

    const rb = new RequestBuilder(this.rootUrl, ProjectControllerService.ProjectControllerUpdateAllPath, 'patch');
    if (params) {
      rb.query('where', params.where, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Project>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll(params?: {
    where?: any;
    body?: Array<UpdateAllProjectRequestDto>
  }): Observable<Project> {

    return this.updateAll$Response(params).pipe(
      map((r: StrictHttpResponse<Project>) => r.body as Project)
    );
  }

}
