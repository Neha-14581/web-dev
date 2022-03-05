const WhoToFollowListItem = (who) => {
    return(`
                           <div class="list-group">
                <li class="list-group-item">Who To Follow</li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-md-2">
                            <img class="rounded" src="../java.png" style="height: 80%; width: 100%"/>
                        </div>
                        <div class="col-md-7">
                            <span class="fw-bold">ReactJS<i class="fas fa-check-circle ms-3"></i></span>
                            <br>
                            <span><small class="text-muted">@Java</small></span>
                        </div>
                        <div class="col-md-1">
                            <button type="submit" class="btn btn-primary rounded-pill mt-2">Follow</button>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-md-2">
                            <img class="rounded" src="../relativityspace.jpg" style="height: 100%; width: 100%"/>
                        </div>
                        <div class="col-md-7">
                            <span class="fw-bold">Relativity Space<i class="fas fa-check-circle ms-3"></i></span>
                            <br>
                            <span><small class="text-muted">@relativityspace</small></span>
                        </div>
                        <div class="col-md-1">
                            <button type="submit" class="btn btn-primary rounded-pill mt-2">Follow</button>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-md-2">
                            <img class="rounded" src="../virgingelectic.svg" style="height: 100%; width: 100%"/>
                        </div>
                        <div class="col-md-7">
                            <span class="fw-bold">Virgin Galactic<i class="fas fa-check-circle ms-3"></i></span>
                            <br>
                            <span><small class="text-muted">@virgingalactic</small></span>
                        </div>
                        <div class="col-md-1">
                            <button type="submit" class="btn btn-primary rounded-pill mt-2">Follow</button>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-md-2">
                            <img class="rounded" src="../nasa.png" style="height: 100%; width: 100%"/>
                        </div>
                        <div class="col-md-7">
                            <span class="fw-bold">NASA<i class="fas fa-check-circle ms-3"></i></span>
                            <br>
                            <span><small class="text-muted">@NASA</small></span>
                        </div>
                        <div class="col-md-1">
                            <button type="submit" class="btn btn-primary rounded-pill mt-2">Follow</button>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-md-2">
                            <img class="rounded" src="../tesla.png" style="height: 100%; width: 100%"/>
                        </div>
                        <div class="col-md-7">
                            <span class="fw-bold">TeslaA<i class="fas fa-check-circle ms-3"></i></span>
                            <br>
                            <span><small class="text-muted">@Tesla</small></span>
                        </div>
                        <div class="col-md-1">
                            <button type="submit" class="btn btn-primary rounded-pill mt-2">Follow</button>
                        </div>
                    </div>
                </li>
            </div>
                
        `);
}
export default WhoToFollowListItem;
